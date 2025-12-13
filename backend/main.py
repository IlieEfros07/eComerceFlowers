from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from routers import (
    auth,
    category,
    product,
    order
)


# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Flowers Ecommerce API",
    version="1.0.0",
    description="Backend API pentru e-commerce Flowers Ecommerce"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(auth.router, prefix="/api", tags=["Auth"])
app.include_router(category.router, prefix="/api", tags=["Categories"])
app.include_router(product.router, prefix="/api", tags=["Products"])
app.include_router(order.router, prefix="/api", tags=["Orders"])

@app.get("/")
def root():
    return {"message": "eCommerce API is running"}

