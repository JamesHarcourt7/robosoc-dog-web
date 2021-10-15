from flask import Blueprint, render_template


main = Blueprint("main", __name__)


@main.route("/controller")
def home():
    return render_template("controller.html")
