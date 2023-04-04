import { BsFillPeopleFill,BsFillPersonLinesFill,BsFillXDiamondFill,BsBarChartLineFill,BsBoxes } from "react-icons/bs";
import styles from '@my_office_book_by_officedesk/styles/Home.module.css'

export default function Footer() {
  return (
    <>
	
      <nav className="bg-light pt-3 pb-3 shadow card card-body pt-1 pb-1 fixed-bottom">
        <div className="container-fluid text-center">
			<div className="centerbtn text-white shadow-sm">
					<BsFillXDiamondFill/>
			</div>
			<div className="row">
				<div className="col-3">
					<BsFillPeopleFill/>
				</div>
				<div className="col-3">
					<BsBarChartLineFill/>
				</div>
				<div className="col-3">
					<BsBoxes/>
				</div>
				<div className="col-3">
					<BsBarChartLineFill/>
				</div>
			</div>
        </div>
      </nav>

      
    </>
  );
}
