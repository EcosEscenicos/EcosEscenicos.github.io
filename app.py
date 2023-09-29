from flask import Flask, request, render_template

app = Flask(__name__)

# Datos simulados de obras (pueden cargarse desde un archivo de texto)
obras = [
    {"titulo": "Obra 1", "autor": "Autor 1", "personajes": "5", "tipo": "Drama", "duracion": "2 horas", "sinopsis": "Sinopsis 1", "contacto": "autor1@example.com"},
    {"titulo": "Obra 2", "autor": "Autor 2", "personajes": "4", "tipo": "Comedia", "duracion": "1.5 horas", "sinopsis": "Sinopsis 2", "contacto": "autor2@example.com"},
    # Agrega más obras aquí...
]

@app.route('/')
def index():
    return render_template('index.html', obras=obras)

@app.route('/buscar', methods=['POST'])
def buscar():
    campo = request.form['campo']
    busqueda = request.form['busqueda'].lower()
    resultados = [obra for obra in obras if busqueda in str(obra[campo]).lower()]
    return render_template('index.html', obras=resultados)

if __name__ == '__main__':
    app.run(debug=True)
