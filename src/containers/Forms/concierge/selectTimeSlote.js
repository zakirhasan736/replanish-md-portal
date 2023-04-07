import React, { useState } from 'react'
import { Col, Radio, Row } from "antd";
import LayoutWrapper from 'src/components/Forms/layoutWrapper'
import SectionTitle from 'src/common/Forms/sectionTitle';
import ProviderInfo from 'src/common/Forms/providerInfo';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import DatePicker from 'src/components/Forms/DatePicker';
import { useRouter } from 'next/router';

const SelectTimeSlote = () => {
  const [value, setValue] = useState(1);
  const router = useRouter();
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='time-slot-wrapper-cont'>
      <div className='concierge-layout-main'>
        <LayoutWrapper NextPage={true} BackToPrev={true} SiteTitle='Search Provider'>
          <div className='layout-wrapper-with-sidebar'>

            <div className='layout-user-screen-box'>
              <Row>
                <Col md={6} xs={24}>
                  <div className='sidebar-content-wrapper'>
                    <div className='provider-sidebar-wrap'>
                      <ProviderInfo ExtraInfo={true} />
                      {/* ==============*/}
                    </div>
                  </div>
                </Col>

                <Col md={11} xs={24}>
                  <div className='provider-overview-wrapper'>
                    <SectionTitle title='Select Time Slot' />

                    <div className='provider-main-wrapperbox'>
                      <div className='provider-select-date-time'>
                        <h6 className='title'>Select a Date & Time</h6>
                        <div className='time-slot-calendar-box'>

                          <div className='calendar-header'>
                            <h3 className='month-year-title'><span className='month'>December</span>, <span className='year'>2021</span></h3>
                            <div className='calendar-navigation-box'>
                              <button className='navigation-arrow prev-arrow'><AiOutlineArrowLeft /></button>
                              <button className='navigation-arrow next-arrow'><AiOutlineArrowRight /></button>
                            </div>
                          </div>

                          <div className='calendar-main-content'>
                            <div className='calendar-top-content'>
                              <div className='days-name'>
                                <div>Mo</div>
                                <div>Tu</div>
                                <div>We</div>
                                <div>Th</div>
                                <div>Fr</div>
                                <div>Sa</div>
                                <div>Su</div>
                              </div>
                            </div>

                            <div className='calendar-bottom-content'>
                              <div className='dates'>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                                <div>17</div>
                                <div className='current'>18</div>
                                <div>19</div>
                                <div>20</div>
                                <div>21</div>
                                <div>22</div>
                                <div>23</div>
                                <div>24</div>
                                <div>25</div>
                                <div>26</div>
                                <div>27</div>
                                <div>28</div>
                                <div>29</div>
                                <div>30</div>
                                <div className='next-date'>1</div>
                                <div className='next-date'>2</div>
                                <div className='next-date'>3</div>
                                <div className='next-date'>4</div>
                                <div className='next-date'>5</div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={7} xs={24}>
                  <div className='sidebar-content-wrapper right-sidebar-content'>
                    <div className='provider-sidebar-wrap'>
                      <div className='time-slot-event-schedule'>

                        <div className='event-select-box'>
                          <div className='gender-select-itembox'>
                            <Radio.Group defaultValue="1" buttonStyle="solid">
                              <Radio.Button value="1">Today ,18 Dec <span className='slot-number'>No slots available</span></Radio.Button>
                              <Radio.Button value="2">Tomorrow ,19 Dec <span className='slot-number'>17 slots available</span></Radio.Button>
                              <Radio.Button value="3">Sat ,20 Dec <span className='slot-number'>17 slots available</span></Radio.Button>
                            </Radio.Group>
                          </div>
                        </div>

                        <div className='slot-event-wrapper'>
                          <h4 className='event-title'><span className='day'>Tomorrow</span> ,  <span className='date'>30</span> <span className='month'>May</span></h4>
                          <div className='slot-event-schedule-time'>
                            <div className='event-select-box'>
                              <h4 className='subtitle'><span className='icons'></span> Morning <span>2 slots</span></h4>
                              <div className='event-select-itembox'>
                                <Radio.Group defaultValue="1" buttonStyle="solid">
                                  <Radio.Button value="1">9:00AM</Radio.Button>
                                  <Radio.Button value="2">11:00AM</Radio.Button>
                                </Radio.Group>
                              </div>
                            </div>
                            <div className='event-select-box'>
                              <h4 className='subtitle'><span className='icons'></span> Afternoon <span>2 slots</span></h4>
                              <div className='event-select-itembox'>
                                <Radio.Group defaultValue="1" buttonStyle="solid">
                                  <Radio.Button value="1">12:00PM</Radio.Button>
                                  <Radio.Button value="2">01:00PM</Radio.Button>
                                  <Radio.Button value="3">02:00PM</Radio.Button>
                                  <Radio.Button value="4">03:00PM</Radio.Button>
                                </Radio.Group>
                              </div>
                            </div>
                            <div className='event-select-box'>
                              <h4 className='subtitle'><span className='icons'></span> Evening <span>2 slots</span></h4>
                              <div className='event-select-itembox'>
                                <Radio.Group defaultValue="1" buttonStyle="solid">
                                  <Radio.Button value="1">06:00PM</Radio.Button>
                                  <Radio.Button value="2">06:30PM</Radio.Button>
                                  <Radio.Button value="3">07:00PM</Radio.Button>
                                </Radio.Group>
                              </div>
                            </div>
                            <div className='event-select-box'>
                              <h4 className='subtitle'><span className='icons'></span> Night <span>2 slots</span></h4>
                              <div className='event-select-itembox'>
                                <Radio.Group defaultValue="1" buttonStyle="solid">
                                  <Radio.Button value="1">08:00PM</Radio.Button>
                                </Radio.Group>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => router.push("/manage_services/concierge?wizard=4&tab=appointment-confrimation")} className='black-button appointment-button'>Scheduled Appointment</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

          </div>

        </LayoutWrapper>
      </div>
    </div>
  )
}

export default SelectTimeSlote
