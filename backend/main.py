from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from routers import (
    auth,
    categories,
    products,
    orders
)


# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AO Seminte API",
    version="1.0.0",
    description="Backend API pentru e-commerce AO Seminte"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(auth.router, prefix="/api", tags=["Auth"])
app.include_router(categories.router, prefix="/api", tags=["Categories"])
app.include_router(products.router, prefix="/api", tags=["Products"])
app.include_router(orders.router, prefix="/api", tags=["Orders"])

@app.get("/")
def root():
    return {"message": "eCommerce API is running"}

