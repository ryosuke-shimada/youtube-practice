import React from "react";

export const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact</h1>

                <form>
                    <div>
                        <label>name</label>
                        <input type="text" required placeholder="Taro" />
                    </div>

                    <div>
                        <label>mail</label>
                        <input type="email" required placeholder="Taro@.com" />
                    </div>

                    <div>
                        <label>message</label>
                        <input
                            type="text"
                            required
                            placeholder="ご自由にどうぞ"
                        />
                    </div>

                    <button type="submit">送信</button>
                </form>
            </main>
        </div>
    );
};
