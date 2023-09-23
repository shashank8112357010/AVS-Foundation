import React, { useState } from 'react';
import { BiGroup } from 'react-icons/bi';


const Team = () => {
    const [tab, setTab] = useState('B')
    return (
        <>
            <section className='team-container mx-auto'>
                <div className='container'>

                    <div className="card bg-white">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="bg-dark d-flex align-items-center justify-content-around">
                                        <div className='text-center '>
                                            <BiGroup size={40} color='white' className='mt-2' />
                                        </div>
                                        <div className='text-white text-center pt-2'>

                                            <p>Invite(valid)</p>
                                            <p>0(0)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="bg-dark d-flex align-items-center justify-content-around">
                                        <div className='text-center '>
                                            <BiGroup size={40} color='white' className='mt-2'  />
                                        </div>
                                        <div className='text-white text-center pt-2'>

                                            <p>Team(valid)</p>
                                            <p>0(0)</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <ul class="nav nav-pills my-5 d-flex justify-content-center" id="pills-tab" role="tablist">
                                <li class="nav-item w-25 text-center" role="presentation">
                                    <button class={`nav-link ${tab === 'B' && 'active'} m-auto w-50`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => setTab('B')}>B 10%  (0)</button>
                                </li>
                                <li class="nav-item   w-25 text-center" role="presentation">
                                    <button class={`nav-link ${tab === 'C' && 'active'} m-auto w-50`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => setTab('C')}>C 5%-  (0)</button>
                                </li>
                                <li class="nav-item w-25 text-center" role="presentation">
                                    <button class={`nav-link ${tab === 'D' && 'active'} m-auto w-50`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => setTab('D')}>D 2%- (0)</button>
                                </li>
                            </ul>

                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Account</th>
                                        <th scope="col">Referrer</th>
                                        <th scope="col">Assets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
Shashank
                                        </td>
                                        <td>
3
                                        </td>
                                        <td>
10
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            {/* <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">hello world</div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">hello world</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">hello world</div>

                            </div> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Team