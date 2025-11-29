from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password) 
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_by_id(db, model, id: int):
    return db.query(model).filter(model.id == id).first()
def get_by_email(db, model, email: str):
    return db.query(model).filter(model.email == email).first()

def create_user(db, model, user_create):
    hashed_password = hash_password(user_create.password)
    db_user = model(**user_create.dict(exclude={"password"}), hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
def update_user(db, model, user_id: int, user_update):
    db_user = db.query(model).filter(model.id == user_id).first()
    if db_user:
        for key, value in user_update.dict(exclude_unset=True).items():
            if key == "password":
                setattr(db_user, "password_hash", hash_password(value))
            else:
                setattr(db_user, key, value)
        db.commit()
        db.refresh(db_user)
    return db_user

def delete_user(db, model, user_id: int) -> bool:
    db_user = db.query(model).filter(model.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
        return True
    return False