import styles from '@my_office_book_by_officedesk/styles/Home.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="card card-body authbox shadow-sm">
		<h4 className="text-center">Login to App</h4>
		<form>
		<div className="form-floating mb-3 mt-3">
			<input type="text" className="form-control" placeholder="Enter mobile" name="mobile"/>
			<label className="form-label">Mobile:</label>
		</div>
		
		<div className="form-floating mb-3 mt-3">
			<input type="password" className="form-control" placeholder="Enter password" name="pass"/>
			<label className="form-label">Password:</label>
		</div>
		<Link href="/" className="float-end mb-2 text-info">Forgot Password ?</Link>	
		<button type="submit" className="btn form-control mt-2 mb-2 btn-info text-white"> Login </button>
		<h5 className="text-center">OR</h5>
		<p className="text-center"><Link href="/" className="mb-2 text-info">Create a new account ?</Link></p>		
		</form>

    </div>
  );
}
