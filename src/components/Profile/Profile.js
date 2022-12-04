import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Publication from "../Publication/Publication";
import * as authService from '../../services/authService';

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {   
        authService.getOne(auth._id)
            .then(user => setData(user));
    }, [auth._id]);

    return (
        <section>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle img-fluid"
                                style={{ width: 400, padding: 50 }}
                            />
                            <p>{`${data.firstName} ${data.lastName}`}</p>
                            <div className="d-flex justify-content-center mb-2">
                                <button type="button" className="btn btn-primary">
                                    Follow
                                </button>
                                <button type="button" className="btn btn-outline-primary ms-1">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{`${data.firstName} ${data.lastName}`}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{data.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{data.phone}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{data.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Publication />
                    <Publication />
                    <Publication />
                </div>
            </div>
        </section>
    );
}

export default Profile;