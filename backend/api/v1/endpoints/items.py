from fastapi import APIRouter

router = APIRouter()

@router.get("/items")
def read_items():
    return ["item1", "item2"]
