import { BsFillPersonLinesFill } from "react-icons/bs";
import Head from 'next/head'
import Image from 'next/image'
import styles from '@my_office_book_by_officedesk/styles/Home.module.css'

export default function Header({title}) {
  return (
    <>

      <Head>
        <title>My Office Book App</title>
        <meta name="description" content="My Office Book App by OfficeDesk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      </Head>


      <nav className="bg-info pt-2 pb-1 fixed-top card card-body shadow-sm">
        <div className="container-fluid clearfix">
          <h4 className="float-start text-white text-left">{title}</h4>
          <h4 className="float-end text-white"><BsFillPersonLinesFill /></h4>          
        </div>
      </nav>

      
    </>
  );
}
