import React from 'react'

export default function NameOrganizer({ data }) {
    return (
        <div>
            {
                data.map((element) => <> {(element[0].names_organizer)}</>)
            }
        </div>
    )
}
