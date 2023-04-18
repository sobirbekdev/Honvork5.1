import React from "react";
import {
    Container, Alert, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Form, FormGroup, Label, Input, FormText
} from "reactstrap";
import '../style.css';

function MyFunc() {
    const newLocal = "header__alert";
    return (
        <div>

            <Container>
                <Alert color="primary" className={newLocal}>

                    <ul className="header__list">
                        <h3 className="text">
                            Logo
                        </h3>
                        <li className="list__item1">
                            <h4>О компании</h4>
                            <h4>Портфолио</h4>
                            <h4>Услуги</h4>
                            <h4>Контакты</h4>
                        </li>
                        <li className="list__item2">
                            <p>+998 90 777-77-77</p>
                            <p className="item2__text2">chotatam@gmail.com</p>
                        </li>
                        <li>
                            <button className="item3__btn">
                                Заказать звонок
                            </button>
                        </li>

                    </ul>
                </Alert>

                <div>

                </div>

                <div className="card__box">
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                    <nav>
                        <Card id="card">
                            <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
                            <CardBody className="CardBody">
                                <CardTitle className="CardTitle">Card title</CardTitle>
                                <CardSubtitle className="CardSubtitle">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</CardText>
                                <Button className="card__btn">Button</Button>
                            </CardBody>
                        </Card>
                    </nav>
                </div>

                <section className="section__wep">
                    <h3 className="section__title">
                        Bajargan loyihalarimiz
                    </h3>
                    <ul className="section__box">
                        <li><Button className="section__btn">Barchasi</Button></li>
                        <li><Button className="section__btn">Veb sayt</Button></li>
                        <li><Button className="section__btn">Veb dizayn</Button></li>
                        <li><Button className="section__btn">SMM</Button></li>
                        <li> <Button className="section__btn">Mobil ilova</Button></li>
                    </ul>
                    <ul className="section__list">
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                        <li>
                            <CardImg top width="100%" src="https://picsum.photos/400" alt="Card image cap" />
                        </li>
                    </ul>
                </section>

                <Form className="from__box">
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>


            </Container>
        </div>
    )
}

export default MyFunc



