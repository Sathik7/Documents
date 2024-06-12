import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
            <h1>Welcome to The POS for small business</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis sit saepe ipsam molestias! Voluptate eligendi deleniti voluptatibus labore a, deserunt officiis quam accusantium sapiente, recusandae totam expedita quas facilis.</p>
            <Link to="/pos" className='btn btn-primary'>Click here to sell product</Link>
          </div>
    </MainLayout>
  )
}

export default HomePage

