import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadBox = styled.div`
	height: 50px;
	border-style: solid;
	border-width: 2px;
	display: flex;
	flex-direction: row;
	align-items: center;
	.left{
		flex: 1 0 0;
	}
	.mid{
		flex: 8 0 0;
	}
	.right{
		flex: 1 0 0;
	}
`;

const Img = styled.img`
	width: 50px;
	height: 30px;
`;



export default function Header () {

	return (
		<HeadBox>
			<Link to='/' className="head left">
				<Img src="youtube.png" alt="Logo" />
			</Link>
			<Link to='/video' className="head left">Video</Link>
			<div className="head left">Subscription</div>
			<div className="head mid"></div>
			<Link to='upload'>
				<Img className="head right" src="upload.png" alt="Upload" />
			</Link>
			<div className="head right">Logout</div>
		</HeadBox>
	);
}