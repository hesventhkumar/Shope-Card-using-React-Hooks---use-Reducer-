import React from 'react'
import ReactDOM from 'react-dom';
import {useState,useReducer} from 'react';

import Apple from './image/apple.jpg'
import Strawberry from './image/strawberry.jpg'
import Mango from './image/mango.jpg'
import Watermelon from './image/watermelons.jpg'
import Pineapple from './image/pineapple.jpg'
import Banana from './image/bananas.jpg'


// INITILIZE STATE

const initialState1 = { count: 0 };
const initialState2 = { count: 0 };
const initialState3 = { count: 0 };
const initialState4 = { count: 0 };
const initialState5 = { count: 0 };
const initialState6 = { count: 0 };


// FUNCTION  REDUCER

function Welcome1(state1, action) {
  switch (action.category) {
    case 'increment':
      return { count: state1.count + 1 };
    case 'decrement':
      return { count: state1.count>0 ? state1.count -1: 0 };
    default:
      throw new Error();
  }
}
function Welcome2(state2, action) {
  switch (action.category) {
    case 'increment':
      return { count: state2.count + 1 };
    case 'decrement':
      return { count: state2.count>0 ? state2.count -1: 0 };
    default:
      throw new Error();
  }
}
function Welcome3(state3, action) {
  switch (action.category) {
    case 'increment':
      return { count: state3.count + 1 };
    case 'decrement':
      return { count: state3.count>0 ? state3.count -1: 0 };
    default:
      throw new Error();
  }
}
function Welcome4(state4, action) {
  switch (action.category) {
    case 'increment':
      return { count: state4.count + 1 };
    case 'decrement':
      return { count: state4.count>0 ? state4.count -1: 0 };
    default:
      throw new Error();
  }
}
function Welcome5(state5, action) {
  switch (action.category) {
    case 'increment':
      return { count: state5.count + 1 };
    case 'decrement':
      return { count: state5.count>0 ? state5.count -1: 0 };
    default:
      throw new Error();
  }
}
function Welcome6(state6, action) {
  switch (action.category) {
    case 'increment':
      return { count: state6.count + 1 };
    case 'decrement':
      return { count: state6.count>0 ? state6.count -1: 0 };
    default:
      throw new Error();
  }
}


function Price (){

}

const Shop = () => {
    const [state1, dispatch1] = React.useReducer(Welcome1, initialState1);
    const [state2, dispatch2] = React.useReducer(Welcome2, initialState2);
    const [state3, dispatch3] = React.useReducer(Welcome3, initialState3);
    const [state4, dispatch4] = React.useReducer(Welcome4, initialState4);
    const [state5, dispatch5] = React.useReducer(Welcome5, initialState5);
    const [state6, dispatch6] = React.useReducer(Welcome6, initialState6);

  return (
    <div>

        <div className="container">

            <h1 className='text-center' >Shopy Zone</h1>


           <div className="row m-3">
                <div className="col">
                <div class="card " >
                <img src={Apple} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Apple</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch1({ category: 'increment' })}>+</button>
                    <input type="text" value={ state1.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch1({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹120/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                                        

                </div>
                <div className="col">
                <div class="card " >
                <img src={Strawberry} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Strawberry</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch2({ category: 'increment' })}>+</button>
                    <input type="text" value={ state2.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch2({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹50/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
                <div className="col">
                <div class="card " >
                <img src={Mango} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Mango</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch3({ category: 'increment' })}>+</button>
                    <input type="text" value={ state3.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch3({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹90/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
           </div>




           
           <div className="row m-3">
                <div className="col">
                <div class="card " >
                <img src={Watermelon} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Watermelon</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch4({ category: 'increment' })}>+</button>
                    <input type="text" value={ state4.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch4({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹120/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                                        

                </div>
                <div className="col">
                <div class="card " >
                <img src={Pineapple} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Pineapple</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch5({ category: 'increment' })}>+</button>
                    <input type="text" value={ state5.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch5({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹50/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
                <div className="col">
                <div class="card " >
                <img src={Banana} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Banana</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch6({ category: 'increment' })}>+</button>
                    <input type="text" value={ state6.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch6({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹90/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
           </div>







                                          {/* BILL DETAIL */}

<div className='h2 text-center'> Bill-Detail</div>


        <div className="container text-center border border-2 m-3 p-3">
          <div className="row mb-2">
            <div className="col fw-bold">S.no</div>

            <div className="col fw-bold">Name</div>
            <div className="col fw-bold">Qty</div>
            <div className="col fw-bold">Total</div>
          </div>

          <div className="row">
            <div className="col">1</div>
            <div className="col">Apple</div>
            <div className="col">{ state1.count}</div>
            <div className="col">₹{state1.count*120}</div>
          </div>

          <div className="row">
          <div className="col">2</div>
            <div className="col">Strawberry</div>
            {/* <div className="col">Qty</div> */}
            <div className="col">{ state2.count}</div>
            <div className="col">₹{state2.count*50}</div>
          </div>

          <div className="row">
          <div className="col">3</div>
            <div className="col">Mango</div>
            {/* <div className="col">Qty</div> */}
            <div className="col">{ state3.count}</div>
            <div className="col">₹{state3.count*90}</div>
          </div>

          <div className="row">
          <div className="col">4</div>
            <div className="col">Watermelon</div>
            {/* <div className="col">Qty</div> */}
            <div className="col">{ state4.count}</div>
            <div className="col">₹{state4.count*120}</div>
          </div>
          <div className="row">
          <div className="col">5</div>
            <div className="col">Pineapple</div>
            {/* <div className="col">Qty</div> */}
            <div className="col">{ state5.count}</div>
            <div className="col">₹{state5.count*50}</div>
          </div>
          <div className="row">
          <div className="col">6</div>
            <div className="col">Banana</div>
            {/* <div className="col">Qty</div> */}
            <div className="col">{ state6.count}</div>
            <div className="col">₹{state6.count*90}</div>
          </div>
          <hr />
          <div className="row ">
          <div className="col-10  fw-bold text-start fs-4">TOTAL:</div>
            <div className="col-2 fw-bold text-danger  text-start fs-4">{state1.count*120+state2.count*50+state3.count*90+state4.count*120+state5.count*50+state6.count*90}</div>
            
        </div>

        </div>

       



        </div>

         





      
    </div>
  )
}

export default Shop