import React, { Component } from 'react'
import './css/FacultyReview.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import srcpng from "./img/Search copy.png";
import PropTypes from 'prop-types';
import CourseCard from '../../Components/Cards/CourseCard';
import FacultyReviewCard from '../../Components/Cards/FacultyReviewCard';
import RateFacultyModal from './RateFacultyModal';
import Empty from '../../Components/Empty/Empty';

export default class Search extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    constructor(props){
        super(props)
        this.state = {
            filteredOptions: [],
            showOptions: false,
            userInput: '',
            search: '',
            rateShow:false,
            activeFaculty:{
                name:"",
                id:""
            }
        };
    this.handleRateShow = this.handleRateShow.bind(this)
    this.closeModal = this.closeModal.bind(this)
    }

    handleRateShow = (id,name) => {
        this.setState({
            activeFaculty:{
                name:name,
                id:id
            },
            rateShow:true
        })
      }
    onChange = (e) => {
        const options = this.props.faculties
        const userInput = e.currentTarget.value;
        const filteredOptions = options.filter(
            (optionName) =>
                optionName.facultyName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
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
    closeModal = () => {
        this.setState({
            rateShow:false
        })
    }
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
            <FacultyReviewCard faculty={optionName} bg={true} onClick={onClick} handleShow={this.handleRateShow}/>
                            );
                        })
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <Empty msg="No Faculty Found" index={1} />
                    </div>
                );
            }
        }
        return (
            <div>
      <RateFacultyModal showModal={this.state.rateShow} activeFaculty={this.state.activeFaculty} closeModal={this.closeModal}/>
                <div className="input-search">
                    <input type="text" id="search" onChange={onChange} value={userInput} placeholder="Search" autoComplete="off" />
                    <img src={srcpng} alt="Go" />
                </div>
                <div className='searched-res'>{optionList}</div>
            </div>
        )
    }
}