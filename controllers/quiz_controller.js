// GET /quizes/pregunta
exports.pregunta = function( req, res) {
	res.render("quizes/pregunta", {pregunta: "Cual es la capital de Italia?" });
};

// GET /quizes/respuesta
exports.respuesta = function( req, res) {
	if( req.query.respuesta === "Roma" ) {
		res.render("quizes/respuesta", {respuesta: "Correcto !!!"});
	} else {
		res.render("quizes/respuesta", {respuesta: "Incorrecto"});
	}
};

//Get /quizez/creditos
exports.autor = function( req, res) {
	res.render("quizes/autor", {title: "EQUIPO DE DESARROLLO" });
};
