import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Movie from './Movie'
import { Component } from 'react'

class ContentWrapper extends Component{
    
    render(){
        return(
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar/>
                    <ContentRowTop/>
                    <Movie />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ContentWrapper;