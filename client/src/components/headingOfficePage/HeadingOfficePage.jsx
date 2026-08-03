import "./headingOfficePage.scss";

const HeadingOfficePage = ({ title, descr, address, svgHEX }) => {
    return (
        <section className="heading">
			<div className="heading__wrapper container">
				<h1 className="heading__title">{title}</h1>
				<div className="heading__descr">
					<p className="heading__text">{descr}</p>

                    {address ? <p className="heading__text heading__text_address">{address}</p> : null}
				</div>
			</div>

			<svg className="heading__logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="265.000000pt" height="391.000000pt" viewBox="0 0 265.000000 391.000000" preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,391.000000) scale(0.100000,-0.100000)" fill={svgHEX} stroke="none">
					<path d="M1020 3777 l0 -132 348 -93 c191 -51 354 -93 362 -92 18 0 491 122 488 126 -2 1 -266 72 -588 158 -322 86 -591 159 -597 161 -10 3 -13 -26 -13 -128z"/>
					<path d="M2190 3426 c-250 -67 -520 -140 -599 -161 l-144 -39 99 -26 c54 -15 167 -44 249 -65 l150 -39 352 95 353 94 0 133 c0 72 -1 132 -2 131 -2 0 -208 -56 -458 -123z"/>
					<path d="M1020 3050 l0 -129 38 -10 c20 -5 180 -48 354 -95 l317 -85 233 61 c128 33 236 64 240 67 6 6 -1149 321 -1174 321 -5 0 -8 -58 -8 -130z"/>
					<path d="M1925 2625 c-396 -107 -892 -240 -1102 -297 -210 -56 -379 -106 -375 -109 4 -4 113 -34 242 -68 l235 -61 365 100 c201 54 589 159 862 232 l498 133 0 133 c0 72 -1 132 -2 131 -2 0 -327 -88 -723 -194z"/>
					<path d="M0 2050 c0 -71 2 -130 4 -130 2 0 162 -43 354 -94 l350 -95 234 61 c128 33 236 64 240 67 6 5 -1151 322 -1174 321 -5 0 -8 -58 -8 -130z"/>
					<path d="M1035 1661 c-319 -86 -586 -159 -592 -161 -7 -3 98 -34 233 -69 l246 -64 351 94 352 94 3 133 c1 72 -1 132 -5 131 -4 -1 -269 -72 -588 -158z"/>
					<path d="M0 1320 l0 -129 38 -10 c146 -39 1031 -277 1321 -355 194 -53 360 -96 369 -96 17 0 493 123 489 126 -5 5 -2197 594 -2209 594 -5 0 -8 -58 -8 -130z"/>
					<path d="M2055 661 c-319 -86 -586 -159 -592 -162 -7 -2 98 -33 233 -68 l245 -64 355 94 354 94 0 133 c0 72 -3 131 -7 131 -5 -1 -269 -72 -588 -158z"/>
					<path d="M1020 320 c0 -72 2 -130 4 -130 3 0 162 -42 355 -94 l350 -94 235 62 c129 33 237 64 240 67 5 5 -1155 320 -1176 319 -5 0 -8 -58 -8 -130z"/>
				</g>
			</svg>
		</section>
    )
}

export default HeadingOfficePage;