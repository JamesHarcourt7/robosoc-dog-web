from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "K\x82\xbc/Z\xa3\xbf,\\U\xfd\x1a;A\x9b\xee\xe9\x85\xe2\x18`@G\x13"
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["REMEMBER_COOKIE_HTTPONLY"] = True
    # Add once in production
    # app.config["SESSION_COOKIE_SECURE"] = True
    # app.config["REMEMBER_COOKIE_SECURE"] = True

    # DELETE LATER
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

    from .main import main
    app.register_blueprint(main)

    return app
