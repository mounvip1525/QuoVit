import React, { Component } from 'react'
import './css/QuestionBank.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import srcpng from "./img/Search copy.png";
import PropTypes from 'prop-types';
import CourseCard from '../../Components/Cards/CourseCard';

export default class Search extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    state = {
        activeOption: 0,
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
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value,
            search: e.currentTarget.value
        });
    };
    onClick = (e) => {
        this.setState({
            activeOption: 0,
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
            state: { activeOption, filteredOptions, showOptions, userInput }
        } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                        filteredOptions.map((optionName,index) => {
                            let className;
                  if (index === activeOption) {
                    className = 'searched-res';
                  }
                            return (
                                    <CourseCard course={optionName} bg={true} key={optionName} onClick={onClick} />
                            );
                        })
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No results</em>
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