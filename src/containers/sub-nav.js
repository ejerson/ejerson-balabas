import React from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({

  getInitialState : function() {
       return { showMe : false };
    },
    onFearClick : function() {
       this.setState({ showMe : true} );
    },

    render : function() {
       if(this.state.showMe) {
           return (<div> I love food! </div>);
       } else {
           return (<h1><a onClick={this.onFearClick}>FEAR</a></h1>);
       }
   }
})

//   render() {
//     return (
//       <div className='sub-nav'>
//         <Link to={'/fear'}><h1>FEAR</h1></Link>
//         <Link to={'/love'}><h1>LOVE</h1></Link>
//       </div>
//     );
//   }
// });
