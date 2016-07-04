window.onload = Start;

function Start()
{
	alert($);

	// Load raw HTML file, then parse it.
	$("#content").load("RawWitchslayerNovel.html", MarkUp);
}

function MarkUp()
{
	var talks = $("p");

	//alert(talks.length);

	for (var i = talks.length - 1; i >= 0; i--)
	{
		var t = talks[i];

		var s = t.innerHTML.split('::');

		if (s.length == 1) continue;

		console.log(s);

		s[0] = '<span class="speech"></span> <strong>' + s[0] + ':</strong>';

		t.innerHTML = s[0] + s[1];

		// var match = s.match(/[^:]*/i)

		// if (match != null)
		// {
		// 	if (match.length > 1)
		// 	{
		// 		var err = "This line is not a proper speech: " + s;
		// 		alert(err);
		// 		throw err;
		// 	}
		// 	else
		// 	{
		// 		t.innerHTML = s.replace(match, "<strong>" + match + "</strong>");
		// 		$(t).replaceWith("<p>" + t.innerHTML + "</p>");
		// 	}
		// }
	}
}