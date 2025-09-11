import tkinter as tk #tkinterというGUIのライブラリ

def add_item(): #関数
    item = entry.get() #entryという変数の中身を取り出す
    if item: #itemが空じゃなければ
        listbox.insert(tk.END,item)
        entry.delete(0,tk.END)

root = tk.Tk()
root.title("お買い物リスト")
root.geometry("300x400")

entry = tk.Entry(root,width=20) 
entry.pack(pady=10)

listbox = tk.Listbox(root)
listbox.pack(pady=10)

button = tk.Button(root, text="追加", command=add_item)
button.pack(pady=10)

root.mainloop()