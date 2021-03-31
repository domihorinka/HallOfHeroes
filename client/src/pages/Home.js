import React from 'react'
import Nav from '../components/Nav'


function Home() {
    return (
        <div>
            <Container className={'container-home'}main={
            <>
            <h1>Welcome to the Hall of Heroes</h1>
            <p className={'home-text'}>
                Login or Sign up to begin
            </p>
           </>
            }/>
            
        </div>
    )
}

export default Home
