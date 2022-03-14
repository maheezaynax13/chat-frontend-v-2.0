import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Join.css";

export default function SignIn() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [show, setShow] = useState(true);

    return (
        <div>
            <div className='w-50 mt-5' style={{ position: "absolute", top: 0, left: "25%" }}>
                <Alert variant='success'>
                    <Alert.Heading className='text-center'>This App Is Made By Jahidun Nur Mahee</Alert.Heading>
                    <p className='text-center'>You can chat with any one with specific room name!</p>
                </Alert>
            </div>
            <div className='joinOuterContainer'>
                <div className='joinInnerContainer'>
                    <h1 className='heading'> Join </h1>{" "}
                    <div>
                        <input
                            placeholder='Name'
                            className='joinInput'
                            type='text'
                            onChange={(event) => setName(event.target.value)}
                        />{" "}
                    </div>{" "}
                    <div>
                        <input
                            placeholder='Room'
                            className='joinInput mt-20'
                            type='text'
                            onChange={(event) => setRoom(event.target.value)}
                        />{" "}
                    </div>{" "}
                    <Link
                        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                        to={`/chat?name=${name}&room=${room}`}
                    >
                        <button className={"button mt-20"} type='submit'>
                            Sign In{" "}
                        </button>{" "}
                    </Link>{" "}
                </div>{" "}
            </div>
        </div>
    );
}
