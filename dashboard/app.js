const icons = document.querySelectorAll(".header-mid i");
const homeIcon = document.getElementById("home");

let userLoggedIn = JSON.parse(localStorage.getItem("CurrentUser"));
let profileName = document.getElementById("profileName");
let createPostBtn = document.getElementById("create-post-btn");

const createPostDialogue = document.getElementById("create-post-dialogue");
const postDialCancelIcon = document.getElementById("post-dial-cancel");
let postBtn = document.getElementById("postBtn");

let postContainer = document.getElementById("post-container");
let postCloseIcon = document.getElementById("postCloseIcon");

let searchInput = document.getElementById("searchInput");

// Facebook navbar icon hovers
icons.forEach(icon => {
    homeIcon.style.color = "#0866ff";

    icon.addEventListener("click", () => {

        // reset all icons to grey
        icons.forEach(i => {
            i.style.color = "#65676B";
        });

        // make clicked icon blue
        icon.style.color = "#0866FF";
    });
});

// Left side See more & less
const seeMore = document.getElementById("seeMore");
const seeLess = document.getElementById("seeLess");

const seeMoreElements = document.querySelectorAll("#seeMoreElement");

seeMore.addEventListener("click", () => {
    seeMoreElements.forEach(el => {
        el.classList.add("show");
    });
    seeLess.style.display = "flex";
    seeMore.style.display = "none";
})

seeLess.addEventListener("click", () => {
    seeMoreElements.forEach(el => {
        el.classList.remove("show");
    });
    seeLess.style.display = "none";
    seeMore.style.display = "flex";
})

// Get account name from local storage object.
profileName.innerText = userLoggedIn.firstName + " " + userLoggedIn.surName;
createPostBtn.innerText = "What's on your mind, " + userLoggedIn.firstName + "?";

// Create post button handler 
createPostBtn.addEventListener("click", () => {
    createPostDialogue.style.display = "flex";
})

postDialCancelIcon.addEventListener("click", () => {
    createPostDialogue.style.display = "none";
})

// Stories
let storyContainer = document.getElementById("story-container");

const stories = [
    {
        fullName: "Emma Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
        storyFile: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=60"
    },
    {
        fullName: "Liam Carter",
        profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
        storyFile: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=60"
    },
    {
        fullName: "Sophia Martinez",
        profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
        storyFile: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=60"
    },
    {
        fullName: "Noah Williams",
        profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
        storyFile: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=60"
    },
    {
        fullName: "Olivia Brown",
        profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
        storyFile: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&q=60"
    },
    {
        fullName: "James Anderson",
        profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
        storyFile: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=400&q=60"
    },
    {
        fullName: "Ava Taylor",
        profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
        storyFile: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=60"
    },
    {
        fullName: "Benjamin Moore",
        profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
        storyFile: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=60"
    },
    {
        fullName: "Isabella Clark",
        profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
        storyFile: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=60"
    },
    {
        fullName: "Lucas Rodriguez",
        profilePic: "https://randomuser.me/api/portraits/men/20.jpg",
        storyFile: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=60"
    },
    {
        fullName: "Mia Lewis",
        profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
        storyFile: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=60"
    },
    {
        fullName: "Henry Walker",
        profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
        storyFile: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=60"
    },
    {
        fullName: "Charlotte Hall",
        profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
        storyFile: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?2?w=400&q=60"
    },
    {
        fullName: "Daniel Young",
        profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
        storyFile: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=400&q=60"
    },
    {
        fullName: "Amelia King",
        profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
        storyFile: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?2?w=400&q=60"
    },
    {
        fullName: "Matthew Scott",
        profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
        storyFile: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?2?w=400&q=60"
    },
    {
        fullName: "Harper Green",
        profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
        storyFile: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=400&q=60"
    },
    {
        fullName: "Ethan Baker",
        profilePic: "https://randomuser.me/api/portraits/men/28.jpg",
        storyFile: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?w=400&q=60"
    },
    {
        fullName: "Ella Adams",
        profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
        storyFile: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=60"
    },
    {
        fullName: "Alexander Nelson",
        profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
        storyFile: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?3?w=400&q=60"
    }
];

// Create story html through map
const createStoryHTMLThroughMap = () => {
    const returnedArr = stories.map((story) => {
        return `
                <div class="story">
                    <div class="story-post">
                        <img src="${story.storyFile}" alt="" loading="lazy">
                    </div>                    
                    <div class="profile-pic">
                        <img src="${story.profilePic}" alt="">
                    </div>
                    <div class="profile-name">
                        <p>${story.fullName}</p>
                    </div>
                </div>        `
    });

    storyContainer.innerHTML += returnedArr.join("");
};
createStoryHTMLThroughMap();

// Create post html
const createPostHtml = (post) => {
    return `    <div class="post-container">
                <div class="post-header">
                    <div class="profile-info">
                        <div><img src="../assets/Profile-Pic.png" alt=""></div>
                        <div>
                            <p>${post.userName}</p>
                            <p class="post-time" data-time="${post.time}"></p>
                        </div>
                    </div>
                    <div class="post-icon">
                        <i class="fa-solid fa-ellipsis"></i>
                        <i class="fa-solid fa-x" id="postCloseIcon"></i>
                    </div>
                </div>

                <div class="post-caption">
                    <p>${post.caption}</p>
                </div>

                <div class="post">
                    <img src="${post.imageUrl}">
                </div>

                <div class="post-footer">
                    <div class="like-btn">
                        <i class="fa-regular fa-thumbs-up"></i>
                        Like
                    </div>
                    <div>
                        <i class="fa-regular fa-comment"></i>
                        Comment
                    </div>
                    <div>
                        <i class="fa-regular fa-share-from-square"></i>
                        Share
                    </div>
                </div> 
                </div>    `
}

const savePostToLocalStorage = (post) => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post); //newest post first
    localStorage.setItem("posts", JSON.stringify(posts));
}

const renderPosts = () => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    postContainer.innerHTML = "";

    posts.forEach(post => {
        postContainer.innerHTML += createPostHtml(post);
    })

    updateTimes();
}

postBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const caption = document.getElementById("postCaptionFromDial").value.trim();
    const imageUrl = document.getElementById("postUrlFromDial").value.trim();
    const time = new Date().toISOString()

    if (!caption && !imageUrl) return;

    const newPost = {
        userName: `${userLoggedIn.firstName} ${userLoggedIn.surName}`,
        caption: caption,
        imageUrl: imageUrl,
        time: time
    }

    savePostToLocalStorage(newPost);
    renderPosts();

    // clear inputs
    document.getElementById("postCaptionFromDial").value = "";
    document.getElementById("postUrlFromDial").value = "";
})

// Load post on page refresh
document.addEventListener("DOMContentLoaded", renderPosts);

// Post Time Handler
function updateTimes() {
    let times = document.querySelectorAll(".post-time");

    times.forEach(time => {
        let postDate = new Date(time.dataset.time);
        let now = new Date();

        let diffMs = now - postDate;

        let minutes = Math.floor(diffMs / 60000);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);

        if (minutes < 1) {
            time.innerText = "Just now";
        } else if (minutes < 60) {
            time.innerText = minutes + "m";
        } else if (hours < 24) {
            time.innerText = hours + "h";
        } else if (days < 7) {
            time.innerText = days + "d";
        } else {
            time.innerText = weeks + "w";
        }
    });
}
setInterval(updateTimes, 60000);

// Like Handler
postContainer.addEventListener("click", (e) => {
    const likeBtn = e.target.closest(".like-btn");
    if (!likeBtn) return;

    const icon = likeBtn.querySelector("i");

    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        likeBtn.style.color = "#005FD5";
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        likeBtn.style.color = "#6C6F73";
    }

    // icon.classList.toggle("fa-solid");
    // icon.classList.toggle("fa-regular");

    console.log("liked");
})

// Search handler through filter and include method
const searchHandler = () => {
    let value = document.getElementById("searchInput").value.trim().toLowerCase();
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (!value) {
        renderPosts();
        return;
    }

    let filteredPosts = posts.filter(post =>
        post.caption?.toLowerCase().includes(value) ||
        post.userName?.toLowerCase().includes(value)
    );

    postContainer.innerHTML = "";
    filteredPosts.forEach(post => {
        postContainer.innerHTML += createPostHtml(post);
    });
}
searchInput.addEventListener("input", searchHandler);

// postCloseIcon.addEventListener("click", () => {
//     localStorage.removeItem()
// })