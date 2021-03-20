import React from 'react'
import { ShowsRender3 } from './CardProfile'


export default function Profile({ data }) {
    let shows = data["shows"]
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }} className="Hello">
                {
                    <>
                        <ShowsRender3 data={shows} key={Math.floor(Math.random() * 1000000)}></ShowsRender3>
                    </>
                }
            </div>
        </div>
    )
}