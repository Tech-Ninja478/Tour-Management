import React, { useRef } from 'react'
import { Col, Form, FormGroup } from 'reactstrap'
import './search-bar.css'

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef('')

    const searchHandler = () => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All Fields are Required!")
        }
    }

    return <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className="d-flex gap-3 form__group form__gorup-fast">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where to?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__gorup-fast">
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance (km)' ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__gorup-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Maximum People</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit'><i class="ri-search-line" onClick={searchHandler}></i></span>
            </Form>
        </div>
    </Col>
}

export default SearchBar
