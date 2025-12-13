from pydantic import BaseModel
from typing import List, Optional
from schemas.order_item import OrderItemCreate, OrderItemOut

class OrderBase(BaseModel):
    customer_name: str
    customer_phone: str
    customer_email: Optional[str] = None
    customer_address: str
    user_id: Optional[int] = None


class OrderCreate(OrderBase):
    items: List[OrderItemCreate]


class OrderUpdate(BaseModel):
    payment_status: Optional[str]
    order_status: Optional[str]


class OrderOut(OrderBase):
    id: int
    total: float
    payment_status: str
    order_status: str
    items: List[OrderItemOut]

    class Config:
        from_attributes = True
