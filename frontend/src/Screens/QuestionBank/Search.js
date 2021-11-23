import React, { Component } from 'react'
import './css/QuestionBank.css'
import srcpng from "./img/Search copy.png";
import PropTypes from 'prop-types';
import CourseCard from '../../Components/Cards/CourseCard';
import Empty from '../../Components/Empty/Empty'

export default class Search extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    state = {
        filteredOptions: [],
        showOptions: false,
        userInput: '',
        search: ''
    };
    onChange = (e) => {
        const options = this.props.courses
        const userInput = e.currentTarget.value;
        const filteredOptions = options.filter(
            (optionName) =>
                optionName.courseName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value,
            search: e.currentTarget.value
        });
    };
    onClick = (e) => {
        this.setState({
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText,
            search: e.currentTarget.innerText
        });
    };
    render() {
        const {
            onChange,
            onClick,
            state: { filteredOptions, showOptions, userInput }
        } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                        filteredOptions.map((optionName) => {
                            return (
                                    <CourseCard course={optionName} bg={true} key={optionName} onClick={onClick} />
                            );
                        })
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <Empty msg="No course found" index={1} />
                    </div>
                );
            }
        }
        return (
            <div>
                <div className="input-search">
                    <input type="text" id="search" onChange={onChange} value={userInput} placeholder="Search" autoComplete="off" />
                    <img src={srcpng} alt="Go" />
                </div>
                <div className='searched-res'>{optionList}</div>
            </div>
        )
    }
}