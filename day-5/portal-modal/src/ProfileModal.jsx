import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function ProfileModal({ onclose }){
    return ReactDOM.createPortal(
        <div className="overlay" onClick={ onclose }>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h1>User Profile</h1>
                <p>Name : Kota Ajith Kumar</p>
                <p>Role : Web Developer</p>
                <button onClick={onclose}>Close</button>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default ProfileModal;