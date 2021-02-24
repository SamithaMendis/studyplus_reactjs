import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { red } from "@material-ui/core/colors";
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import team1 from "assets/img/faces/avatar.jpg";
import { card } from "assets/jss/material-kit-react";
import ReactStars from "react-rating-stars-component";


const useStyles = makeStyles(styles);

export default function CoursePills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>
              <small style={{fontSize: '30px', color: 'black'}}>
                Explore
              </small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Web Development",
                    // tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <br />

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={4}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                              <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  Digital Photography for Beginners with DSLR camara
                                </Typography>
                                <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                                  Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                                </Typography>
                                <br />
                                  <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                  />,
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  $99.99
                                </Typography>
                            </GridItem>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={4}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                              <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  Digital Photography for Beginners with DSLR camara
                                </Typography>
                                <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                                  Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                                </Typography>
                                <br />
                                  <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                  />,
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  $99.99
                                </Typography>
                            </GridItem>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={4}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                              <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  Digital Photography for Beginners with DSLR camara
                                </Typography>
                                <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                                  Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                                </Typography>
                                <br />
                                  <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                  />,
                            </GridItem>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                                  $99.99
                                </Typography>
                            </GridItem>
                          </GridItem>
                        </GridContainer>
                        <br />

                      </span>
                    )
                  },
                  {
                    tabButton: "Mobile Apps",
                    // tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Databases",
                    // tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Web Development",
                    // tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Mobile Apps",
                    // tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Databases",
                    // tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
          

          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={8}>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
          
            <Button
                color="primary"
                block
                style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

              >
              Load More
            </Button>

            </GridItem>
          </GridContainer>
        
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


          <h3 style={{fontWeight:"bold"}}>Popular Topics</h3>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  NodeJS
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  MySQL
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  VSCode
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  Java
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  C#
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  Javascript
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  Full Stack
                </Button> 
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Button
                    color="primary"
                    block
                    style={{maxWidth: '500px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}
                  >
                  C++
                </Button> 
              </GridItem>
            </GridItem>
        
          </GridContainer>

          <br />
          <br />
          <br />
          <br />
          <h3 style={{fontWeight:"bold"}}>Feature Courses</h3>
          <br />
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                    Digital Photography for Beginners with DSLR camara
                  </Typography>
                  <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                    Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                  </Typography>
                  <br />
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />,
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                    $99.99
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Button
                      color="primary"
                      block
                      style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                    >
                    Add to cart
                  </Button>
              </GridItem>
            </GridItem>
          </GridContainer>
                       
          <br />
          <br />
          <br />
          <br />
          <h3 style={{fontWeight:"bold"}}>Popular Instructors</h3>
          <br />
          
          <GridContainer>
            
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                  <img src={team1} alt="..." className={classes.imgRounded_small + " " + classes.imgFluid_small} />
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Savannah Nguyen
                    </Typography>
                    <Typography style={{fontSize:"12px"}} variant="subtitle1" color="textSecondary">
                      NodeJS, Databases
                    </Typography>
                    <br />
                    <Typography style={{fontSize:"10px"}} variant="subtitle1" color="textSecondary">
                      434433 students
                    </Typography>
                    <br />
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      />,
                </GridItem>
              </GridItem>
            </GridContainer>
           </GridItem> 
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                  <img src={team1} alt="..." className={classes.imgRounded_small + " " + classes.imgFluid_small} />
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Savannah Nguyen
                    </Typography>
                    <Typography style={{fontSize:"12px"}} variant="subtitle1" color="textSecondary">
                      NodeJS, Databases
                    </Typography>
                    <br />
                    <Typography style={{fontSize:"10px"}} variant="subtitle1" color="textSecondary">
                      434433 students
                    </Typography>
                    <br />
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      />,
                </GridItem>
              </GridItem>
            </GridContainer>
           </GridItem> 
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                  <img src={team1} alt="..." className={classes.imgRounded_small + " " + classes.imgFluid_small} />
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12} sm={12} md={12}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Savannah Nguyen
                    </Typography>
                    <Typography style={{fontSize:"12px"}} variant="subtitle1" color="textSecondary">
                      NodeJS, Databases
                    </Typography>
                    <br />
                    <Typography style={{fontSize:"10px"}} variant="subtitle1" color="textSecondary">
                      434433 students
                    </Typography>
                    <br />
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      />,
                </GridItem>
              </GridItem>
            </GridContainer>
           </GridItem> 

          </GridContainer>



          <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


          <h3 style={{fontWeight:"bold"}}>Browse Courses</h3>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                Ratings
              </Typography>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="radio" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </GridItem>
                  
                </GridContainer>
              
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="radio" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </GridItem>
                </GridContainer>
              
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="radio" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </GridItem>
                </GridContainer>
              
              </div>
              </GridItem>
           
              <br/>
              <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                Level
              </Typography>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Advanced
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      intermediates
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Beginner
                    </Typography>
                  </GridItem>
                </GridContainer>

              </div>
              </GridItem>
           
              <br/>
              <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                Topic
              </Typography>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      NodeJS
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      expressJS
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Game Development
                    </Typography>
                  </GridItem>
                </GridContainer>

              </div>
              </GridItem>
           

              <br/>
              <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                Price
              </Typography>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Paid
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Free
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Discounted
                    </Typography>
                  </GridItem>
                </GridContainer>

              </div>
              </GridItem>
           
              <br/>
              <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                Type
              </Typography>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Vide Course
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Live Class
                    </Typography>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                    <input type="checkbox" value="Male" name="gender" /> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography style={{fontSize:"14px"}}  component="h6" variant="h6">
                      Test
                    </Typography>
                  </GridItem>
                </GridContainer>

              </div>
              </GridItem>
           

            </GridItem>
            <GridItem xs={12} sm={12} md={9}>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                          Digital Photography for Beginners with DSLR camara
                        </Typography>
                        <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                          Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                        </Typography>
                        <br />
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />,
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                        $99.99
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Button
                          color="primary"
                          block
                          style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                        >
                        Add to cart
                      </Button>
                  </GridItem>
                </GridItem>
                </GridContainer>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                          Digital Photography for Beginners with DSLR camara
                        </Typography>
                        <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                          Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                        </Typography>
                        <br />
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />,
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                        $99.99
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Button
                          color="primary"
                          block
                          style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                        >
                        Add to cart
                      </Button>
                  </GridItem>
                </GridItem>
                </GridContainer>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                          Digital Photography for Beginners with DSLR camara
                        </Typography>
                        <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                          Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                        </Typography>
                        <br />
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />,
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                        $99.99
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Button
                          color="primary"
                          block
                          style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                        >
                        Add to cart
                      </Button>
                  </GridItem>
                </GridItem>
                </GridContainer>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                          Digital Photography for Beginners with DSLR camara
                        </Typography>
                        <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                          Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                        </Typography>
                        <br />
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />,
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                        $99.99
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Button
                          color="primary"
                          block
                          style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                        >
                        Add to cart
                      </Button>
                  </GridItem>
                </GridItem>
                </GridContainer>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                          Digital Photography for Beginners with DSLR camara
                        </Typography>
                        <Typography style={{fontSize:"14px"}} variant="subtitle1" color="textSecondary">
                          Learn how to take stunning photographs by mastering both the technical and creative sides of digital photography
                        </Typography>
                        <br />
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />,
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                      <Typography style={{fontSize:"20px"}}  component="h6" variant="h6">
                        $99.99
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Button
                          color="primary"
                          block
                          style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px', color: "black"}}

                        >
                        Add to cart
                      </Button>
                  </GridItem>
                </GridItem>
                </GridContainer>
              </GridItem>
              <br />
            </GridItem>
          </GridContainer>




        </div>

      </div>
    </div>
  
  );
}
