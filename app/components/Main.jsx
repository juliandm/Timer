var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');

var Main = (props) => {
  return(
     <div>
       <div >
         <div>
           <Nav/>
           <p>Main rendered</p>
            {props.children}
         </div>
       </div>
     </div>
  )

};
module.exports = Main;