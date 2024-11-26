import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
             <h1></h1>
             <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Property Plus</a>
  </div>
  <div className="flex-col">
            <Link>User</Link>  <br />
            <Link>Agent</Link> <br />
            <Link>Admin</Link>
  </div>
</div>

            
        </div>
    );
};

export default MyProfile;