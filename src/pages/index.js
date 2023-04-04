import Head from 'next/head'
import Image from 'next/image'
import styles from '@my_office_book_by_officedesk/styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
      <Header title="My Office Book"/>

      <Login/>
      
      <Footer />  

    </>
  );
}
