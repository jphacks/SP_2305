import os
import secrets

jkey = ""

def key():
    global jkey
    if jkey == "":
        jkey = os.getenv('PENGUIN_SECRET', secrets.token_urlsafe(16))
    return jkey


