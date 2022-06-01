
import React, { useState, useEffect } from 'react';
import './Background.css';
import "./Timer"
import MovingPendulum from "./MovingPendulum"
import Timer from "./Timer";
export default function Background() {

    return (
        <div className="Background">
            <div className="background">
                <header className="background-header">

                    <Timer startTimeInSecodns={0}/>
                </header>
            </div>
            <div className="ground">
                <header className="ground-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
            </div>
        </div>
    );
}