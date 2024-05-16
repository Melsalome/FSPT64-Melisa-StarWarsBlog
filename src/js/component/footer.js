import React, { Component } from "react";
import yoda from '../../img/yoda-removebg-preview.png'
import '../../styles/index.css'

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<img src={yoda} className="yoda"/>
	</footer>
);
