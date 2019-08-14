import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import 'shards-ui/dist/css/shards.min.css';

import 'shards-ui/dist/js/shards.min';
import "./Dashboard.css";



class Dashboard extends Component {
    render() {
        return (
            <div class="dashboard-wrapper">
            <div class="container">
            <div class="row">
                
                <div class="col-md-8">
                    <div class="card mb-5">
                        <h6 class="card-text ml-4 mt-4">
                            YOUR COURSE PROGRESS
                            
                        </h6>
                        <div class="card-body">
                            <p class="card-text">
                                <div class="mb-4">
                                <div class="flex-row align-items-end justify-content-between">
                                                <h4>Reading Test</h4>
                                                <h4 class="progress-label text-uppercase">
                                                    25%
                                                </h4>
                                            </div>
                                <div class="progress">
                                    <div class="progress-bar w-25 progress-bar-striped">
                                    </div>
                                </div>
                                </div>
                                <div class="mb-4">
                                <div class="flex-row align-items-end justify-content-between">
                                                <h4>Writing & Language Test</h4>
                                                <h4 class="progress-label text-uppercase">
                                                    0%
                                                </h4>
                                            </div>
                                <div class="progress">
                                    <div class="progress-bar w-0 progress-bar-striped">
                                    </div>
                                </div>
                                </div>
                                <div class="mb-4">
                                <div class="flex-row align-items-end justify-content-between">
                                                <h4>Math Test</h4>
                                                <h4 class="progress-label text-uppercase">
                                                    75%
                                                </h4>
                                            </div>
                                <div class="progress">
                                    <div class="progress-bar w-75 progress-bar-striped">
                                    </div>
                                </div>
                                </div>
                                <div class="mb-4">
                                <div class="flex-row align-items-end justify-content-between">
                                                <h4>Math Test With Calculator</h4>
                                                <h4 class="progress-label text-uppercase">
                                                    0%
                                                </h4>
                                            </div>
                                <div class="progress">
                                    <div class="progress-bar w-0 progress-bar-striped">
                                    </div>
                                </div>
                                </div>
                                <div class="mb-4">
                                <div class="flex-row align-items-end justify-content-between">
                                                <h4>Essay Test</h4>
                                                <h4 class="progress-label text-uppercase">
                                                    50%
                                                </h4>
                                            </div>
                                <div class="progress">
                                    <div class="progress-bar w-50 progress-bar-striped">
                                    </div>
                                </div>
                                </div>
                                <div className="overall">
                                    <h5 class="text-primary text-center">View Overall Progress</h5>
                                </div>
                                
                                   <h6 class="text-secondary mt-2">CURRENT LESSON</h6>
                                   <h6><strong>Inference</strong></h6>
                                   <p class="text-secondary">This topic will show you how to quick identify and approach inference questions
                                   using keywords provided in the question stem.</p>
                                   <div class="text-center">
                                   <button type="button" class="btn btn-success btn-center">
                                   <i class="fas fa-arrow-right"></i>
                                       Resume Lessons</button>
                                   </div>
                            </p>
                        </div>
                    </div>
                </div>
            
                <div class="col-md-4">
                <div class="card dashboard--days-remaining mb-5">
                        <div class="card-body">
                            <div class="d-flex flex-row justify-content-around align-items-center">
                                <div class="card calendar-card">
                                    <div className="card-header calendar-card-header">
                                        <h4 class="text-white text-center ">DEC</h4></div>
                                    <div class="card-body calendar-card-body"><h4 class="text-center text-dark">07</h4></div>
                                </div>
                                <div>
                                    <h2 class="text-center mb-0">117</h2>
                                    <h5 class="text-uppercase text-grey text-center">Days till<br/>exam</h5>
                                </div>
                                
                            </div>    
                        </div>
                        
                    </div>
                    <div class="card dashboard--weekly-test mb-5">
                        <div class="card-header">
                        </div>
                        <div class="card-body">
                        <div class="weekly-test-icon">
                                <i class="fas fa-bolt ml-1 text-primary"></i>
                            </div>
                            <h3 class="text-center mb-3">Weekly Quiz</h3>
                            <p class="small text-center mb-0">The next weekly quiz will be available soon. We'll notify you when it's ready!</p>
                        </div>
                    </div> 
                    <div class="card">
                        <div class="card-body">
                            <p class=" text-center text-secondary">
                                
                                    YOUR PREDICTED SCORE IS
                                
                                <h3 class="text-success">400-800</h3>
                                
                                    BASED ON YOUR <br/> DIGANOSTIC
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mb-3">
                    <div className="over">
                        <h6>RECENT RESULTS</h6>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-5">
                        <div class="card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">WEEKLY QUIZ</h6>
                                   <h5><strong>SAT WEEKLY QUIZ 2</strong></h5> 
                                   <h2 class="text-success">100%</h2>
                                   <div class="p-2 text-right text-secondary">4 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                             <h6 class="text-primary"><bold>VIEW REPORTS
                             <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <div class="card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">FULL MOCK EXAM</h6>
                            <h5><strong>Official SAT College Board <br/>Practice Test 8</strong></h5> 
                            <h2 class="text-danger">400</h2>
                            <div class="p-2 text-right text-secondary">16 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                        <h6 class="text-primary"><bold>VIEW REPORTS
                        <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                <div class="card mb-5">
                        <div class=" card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">WORKSHEET</h6>
                            <h5><strong>Practice Test 1 </strong></h5> 
                            <h2 class="text-danger">20%</h2>
                            <div class="p-2 text-right text-secondary">10 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                        <h6 class="text-primary"><bold>VIEW REPORTS
                        <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <div class="card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">FULL MOCK EXAM</h6>
                            <h5><strong>Official SAT College Board <br/>Practice Test7 </strong></h5> 
                            <h2 class="text-danger">400</h2>
                            <div class="p-2 text-right text-secondary">16 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                        <h6 class="text-primary"><bold>VIEW REPORTS
                        <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                <div class="card mb-5">
                        <div class="card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">FULL MOCK EXAM</h6>
                            <h5><strong>SAT MOCK TEST 3 </strong></h5> 
                            <h2 class="text-danger">400</h2>
                            <div class="p-2 text-right text-secondary">16 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                        <h6 class="text-primary"><bold>VIEW REPORTS
                        <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <div class="card-body p-4">
                            <p class="card-text">
                            <h6 class="text-secondary mt-2">FULL MOCK EXAM</h6>
                            <h5><strong>Official SAT College Board <br/>Practice Test 6</strong></h5> 
                            <h2 class="text-danger">400</h2>
                            <div class="p-2 text-right text-secondary">16 DAYS AGO</div>
                            </p>
                        </div>
                        <div class="card-footer px-4 py-3 text-center">
                        <h6 class="text-primary"><bold>VIEW REPORTS
                        <i class="fas fa-chevron-right ml-2"></i></bold></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
            
        );
    }
}

export default Dashboard;