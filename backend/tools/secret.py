import secrets

jkey = ""

def key():
    global jkey
    if jkey == "":
        jkey = secrets.token_urlsafe(16)
    return jkey


