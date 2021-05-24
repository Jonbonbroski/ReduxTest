import {Component} from 'react'
import {connect} from 'react-redux'
import getMessages from "../../actions/postActions"
import store from "../../store/store"

class Messages extends Component{


    
    componentWillMount(){
        console.log("working?")
        getMessages();
        console.log(store.getState())
        
    }

    render(){

        return(

            <div>
                <h1>Messages</h1>
                <button>See Messages</button>
                <h1>{this.props.messages}</h1>
                
            </div>
        )
    }
};


export default connect(null, {getMessages})(Messages);