import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../../redux/rockets/rockets';