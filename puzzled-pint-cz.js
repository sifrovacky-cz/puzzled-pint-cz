	function switchLanguage(lang) {
		if (lang=="cs") {
            document.getElementById("texten").className = "text hidden";
            document.getElementById("linken").className = "text hidden";
			document.getElementById("menuen").className = "hidden";
            document.getElementById("textcs").className = "text";
            document.getElementById("linkcs").className = "text";
			document.getElementById("menucs").className = "";

		}
		else {
            document.getElementById("textcs").className = "text hidden";
            document.getElementById("linkcs").className = "text hidden";
			document.getElementById("menucs").className = "hidden";
            document.getElementById("texten").className = "text";
            document.getElementById("linken").className = "text";
			document.getElementById("menuen").className = "";
		};
	};
