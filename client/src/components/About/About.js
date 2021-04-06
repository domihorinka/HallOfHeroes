import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <main className='about'>
                <h1 className='welcome'>Hello and Welcome! to Hall of Heroes</h1>
                <h3 className='what'>What is Hall of Heroes?</h3>
                <p className='desc'>
                    Hall of Heroes is a web application that anyone can use to create and store their Dungeons and Dragons characters.
                </p>
                <h3 className='what'>What is Dungeons and Dragons?</h3>
                <p className='desc'>
                    Dungeons and Dragons is a RPG game where one player, the DM, runs the campaign in which the other players will create characters who will be adventurers in the campaign. The adventurers will have to navigate through the campaign as other characters, monsters, and terrains that the DM will create to challenge the adventurers. As the adventurers face and defeat bosses the players will gain experience and become stronger, it is up to the players to keep role play and keep their characters alive.
                </p>
            </main>

        </>
    )
}

export default About
