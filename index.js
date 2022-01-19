$(function () {
	var data = {
		shoes: [
			{
				id: "shoe1",
				name: "Pure Tone",
				gender: "Male",
				style: "Sneaker",
				sizes: [4, 4.5, 5, 5.5, 6, 6.5, 7],
				price: 750.0,
				colour: "Black",
				description:
					"These chic snake print shoes are crafted from a combination of soft leather and nubuck. For ultimate versatility, they feature a heel piece that folds down - allowing them to be worn as slip-ons or mules. The simple yet sophisticated upper is teamed with a low 2cm heel and rubber outsole to help with grip, while a leather lining and sock work together with our dual density Cushion Plus™ technology to provide comfort in every step.",
				picture: "./images/shoe1_0.jpeg",
				url: "./external/shoe1.html",
			},
			{
				id: "shoe2",
				name: "Orinoco 2 Lace",
				gender: "Male",
				style: "Sneaker",
				sizes: [5, 6, 7],
				price: 850.0,
				colour: "Brown",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe2_0.jpeg",
				url: "./external/shoe2.html",
			},
			{
				id: "shoe3",
				name: "adidas",
				gender: "Female",
				style: "Sneaker",
				sizes: [5, 6, 7],
				price: 890.0,
				colour: "Purple",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe3_0.jpeg",
				url: "./external/shoe3.html",
			},
			{
				id: "shoe4",
				name: "adidas",
				gender: "Female",
				style: "Sneaker",
				sizes: [5, 6, 7],
				price: 950.0,
				colour: "Green",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe4_0.jpeg",
				url: "./external/shoe4.html",
			},
			{
				id: "shoe5",
				name: "adidas",
				gender: "Male",
				style: "Sneaker",
				sizes: [5, 6, 7],
				price: 1000.0,
				colour: "Purple",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe5_0.jpeg",
				url: "./external/shoe5.html",
			},
			{
				id: "shoe6",
				name: "adidas",
				gender: "Female",
				style: "Boot",
				sizes: [5, 6, 7],
				price: 1200.0,
				colour: "Orange",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe6_0.jpeg",
				url: "./external/shoe6.html",
			},
			{
				id: "shoe7",
				name: "adidas",
				gender: "Male",
				style: "Boot",
				sizes: [5, 6, 7],
				price: 1500.0,
				colour: "Brown",
				description:
					"Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
				picture: "./images/shoe7_0.jpeg",
				url: "./external/shoe7.html",
			},
		],
	};
	$("#clear-btn").on("click", function (e) {
		localStorage.clear();
		location.reload();
	});
	var values = [],
		keys = Object.keys(localStorage),
		i = keys.length;

	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}

	$.each(values, function (i, data) {
		let favImage = document.getElementById("favDiv");
		$(favImage).append(
			$(
				"<li>",
				{ id: i, class: "list-group-item", text: data, name: i },
				"</li>"
			)
		);
	});

	//Filtering of shoes after going through if condition
	$("#Search").on("click", function () {
		var genderProp = $("#property").val();
		var colourProp = $("#property2").val();
		var styleProp = $("#property3").val();
		var priceProp = $("#property4").val();

		var output = "<ul>";
		for (var i in data.shoes) {
			if (genderProp == data.shoes[i].gender)
				if (colourProp == data.shoes[i].colour)
					if (styleProp == data.shoes[i].style)
						if (priceProp == data.shoes[i].price)
							output +=
								"<div class='card ' style='width:18rem;'>" +
								"<img src='" +
								data.shoes[i].picture +
								"' class='card-img-top' alt='...'>" +
								"<div class='card-body'>" +
								"<h5 class='card-title'> " +
								data.shoes[i].name +
								"</h5>" +
								"<p class='card-text text-truncate'>" +
								data.shoes[i].description +
								"</p>" +
								"<h5 class='card-text'>LKR. " +
								data.shoes[i].price +
								"</h5>" +
								"<i id=" +
								data.shoes[i].id +
								" class='far fa-heart fa-2x '" +
								" name=" +
								data.shoes[i].id +
								"></i>" +
								"<a href=" +
								data.shoes[i].url +
								" class='btn btn-primary float-end'>Go to Page</a>" +
								"</div>" +
								"</div>";
		}
		output += "</ul>";

		document.getElementById("Placeholder").innerHTML = output;

		$(".card-body").on("click", "#shoe1", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});

		$(".card-body").on("click", "#shoe2", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});

		$(".card-body").on("click", "#shoe3", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});
		$(".card-body").on("click", "#shoe4", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});
		$(".card-body").on("click", "#shoe5", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});
		$(".card-body").on("click", "#shoe6", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});
		$(".card-body").on("click", "#shoe7", function (e) {
			var name = $(this).attr("name");

			localStorage.setItem("id" + name, name);
			location.reload();
		});
	});

	//creating the UI Tab
	var output = "<ul>";
	output +=
		"<ul class='nav nav-tabs' id='myTab' role='tablist'>" +
		"<li class='nav-item' role='presentation'>" +
		"<button class='nav-link active' id='home-tab' data-bs-toggle='tab' data-bs-target='#home' type='button' role='tab' aria-controls='home' aria-selected='true'>Description</button></li>" +
		"<li class='nav-item' role='presentation'>" +
		"<button class='nav-link' id='profile-tab' data-bs-toggle='tab' data-bs-target='#profile' type='button' role='tab' aria-controls='profile' aria-selected='false'>Images</button></li>" +
		"<li class='nav-item' role='presentation'><button class='nav-link' id='contact-tab' data-bs-toggle='tab' data-bs-target='#contact' type='button' role='tab' aria-controls='contact' aria-selected='false'>Size Chart</li></ul>" +
		"<div class='tab-content'  id='myTabContent'>" +
		"<div class='tab-pane fade  show active ' id='home' role='tabpanel ' aria-labelledby='home-tab'>" +
		data.shoes[0].description +
		"</div>" +
		"<div class='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>" +
		"<img src='/external/images/blackshoe2.jpeg' style='width:280px; height:250px;'/>" +
		"<img src='/external/images/blackshoe3.jpeg' style='width:280px; height:250px;'/>" +
		"<img src='/external/images/blackshoe4.jpeg' style='width:280px; height:250px;'/>" +
		"<img src='/external/images/blackshoe5.jpeg' style='width:280px; height:250px;'/>" +
		"</div>" +
		"<div class='tab-pane fade' id='contact' role='tabpanel' aria-labelledby='contact-tab'>" +
		"<img src='/external/images/chart.jpeg' style='width:535px; height:535px;'/>" +
		"</div>" +
		"</div>";
	document.getElementById("tabView").innerHTML = output;

	function imageZoom(imgID, resultID) {
		var img, lens, result, cx, cy;
		img = document.getElementById(imgID);
		result = document.getElementById(resultID);
		/* Create lens: */
		lens = document.createElement("DIV");
		lens.setAttribute("class", "img-zoom-lens");
		/* Insert lens: */
		img.parentElement.insertBefore(lens, img);
		/* Calculate the ratio between result DIV and lens: */
		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;
		/* Set background properties for the result DIV */
		result.style.backgroundImage = "url('" + img.src + "')";
		result.style.backgroundSize =
			img.width * cx + "px " + img.height * cy + "px";
		/* Execute a function when someone moves the cursor over the image, or the lens: */
		lens.addEventListener("mousemove", moveLens);
		img.addEventListener("mousemove", moveLens);
		/* And also for touch screens: */
		lens.addEventListener("touchmove", moveLens);
		img.addEventListener("touchmove", moveLens);
		function moveLens(e) {
			var pos, x, y;
			/* Prevent any other actions that may occur when moving over the image */
			e.preventDefault();
			/* Get the cursor's x and y positions: */
			pos = getCursorPos(e);
			/* Calculate the position of the lens: */
			x = pos.x - lens.offsetWidth / 2;
			y = pos.y - lens.offsetHeight / 2;
			/* Prevent the lens from being positioned outside the image: */
			if (x > img.width - lens.offsetWidth) {
				x = img.width - lens.offsetWidth;
			}
			if (x < 0) {
				x = 0;
			}
			if (y > img.height - lens.offsetHeight) {
				y = img.height - lens.offsetHeight;
			}
			if (y < 0) {
				y = 0;
			}
			/* Set the position of the lens: */
			lens.style.left = x + "px";
			lens.style.top = y + "px";
			/* Display what the lens "sees": */
			result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
		}
		function getCursorPos(e) {
			var a,
				x = 0,
				y = 0;
			e = e || window.event;
			/* Get the x and y positions of the image: */
			a = img.getBoundingClientRect();
			/* Calculate the cursor's x and y coordinates, relative to the image: */
			x = e.pageX - a.left;
			y = e.pageY - a.top;
			/* Consider any page scrolling: */
			x = x - window.pageXOffset;
			y = y - window.pageYOffset;
			return { x: x, y: y };
		}
	}
	imageZoom("myimage", "myresult");
});
