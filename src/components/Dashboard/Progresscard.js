import React, { Component } from 'react';
import "./P.css";

class Progresscard extends Component {
    render() {
        return (
            <div class="card dashboard--progress mb-5" >
            <div class="card-body">
                <h5 class="text-grey text-uppercase mb-4">your course progress</h5>
                <div class="sectional-progress">
                    <div class="mb-4">
                        <div class="flex-row justify-content-start">
                            <h4 class="number-icon flex-center mr-3">1</h4>
                            <div class="w-100">
                                <div class="flex-row align-items-end justify-content-between">
                                    <h4>Reading Test</h4>
                                    <h4 class="proress-lebel text-uppercase">9%</h4>
                                </div>
                                <div class="custom-progress-bar mt-2 mb-3">
                                    <div class="progress-bar-inner" style={{width:9}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default Progresscard;