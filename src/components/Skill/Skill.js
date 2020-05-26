import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Skill.css'

const Skill = () => {
    return (
        <div className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="skill-title">
                            <h2>My Skills</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="skill-progress">
                            <div className="card">
                               <div className="card-body">
                                <div className="card-title"><h5>React</h5>  <h5>80%</h5></div>
                                
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width:"80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        
                                    </div>
                               </div>
                            </div> 


                            <div className="card">
                               <div className="card-body">
                                <div className="card-title"><h5>Node js</h5>  <h5>80%</h5></div>
                                
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width:"80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        
                                    </div>
                               </div>
                            </div>


                           



                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-progress">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title"><h5>Express</h5>  <h5>90%</h5></div>
                                    
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            
                                        </div>
                                </div>
                                </div>


                                <div className="card">
                               <div className="card-body">
                                <div className="card-title"><h5>MongoDB</h5>  <h5>80%</h5></div>
                                
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{width:"80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        
                                    </div>
                               </div>
                            </div>


                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default Skill;