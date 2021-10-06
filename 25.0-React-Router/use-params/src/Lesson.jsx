import React from 'react'
import { useParams } from 'react-router'

const Lesson = () => {

    const {course, lesson} = useParams()

    return (
        <div>
            <h1>Welcome to {course}!  Here you will learn all about {lesson}</h1>
        </div>
    )
}

export default Lesson
