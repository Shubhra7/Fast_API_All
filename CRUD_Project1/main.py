from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Tea(BaseModel):
    id: int
    name:str
    origin: str

teas: List[Tea] = []

# decorator give extra power to your class/fucntion/service
# app decorator to handle api

@app.get("/")
def read_root():
    return {"message" : "Welcome to Shubhra Fast API..!"}

@app.get("/teas")
def get_teas():
    return teas

@app.post("/teas")
def add_tea(tea: Tea):
    teas.append(tea)
    return tea

@app.put("/teas/{tea_id}")
def update_tea(tea_id:int, updated_tea: Tea):
    for index,tea in enumerate(teas):
        if tea.id == tea_id:
            teas[index]=updated_tea
            return updated_tea
    return {"error": "Tea not found!!"}

@app.delete("/teas/{tea_id}")
def delete_tea(tea_id:int):
    for index,tea in enumerate(teas):
        if tea.id == tea_id:
            deleted = teas.pop(index)
            return deleted
    return {"error": "Tea not found!!"}
