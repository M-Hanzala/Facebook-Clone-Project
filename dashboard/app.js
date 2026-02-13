const icons = document.querySelectorAll(".header-mid i");
const homeIcon = document.getElementById("home");

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

// Stories
let storyContainer = document.getElementById("story-container");

const stories = [
    {
        fullName: "Emma Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
        storyFile: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        fullName: "Liam Carter",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        storyFile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    // {
    //     fullName: "Sophia Martinez",
    //     profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    // },
    // {
    //     fullName: "Noah Williams",
    //     profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    // },
    // {
    //     fullName: "Olivia Brown",
    //     profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    // },
    // {
    //     fullName: "James Anderson",
    //     profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    // },
    // {
    //     fullName: "Ava Taylor",
    //     profilePic: "https://randomuser.me/api/portraits/women/30.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
    // },
    // {
    //     fullName: "Benjamin Moore",
    //     profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
    // },
    // {
    //     fullName: "Isabella Clark",
    //     profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    // },
    // {
    //     fullName: "Lucas Rodriguez",
    //     profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    // },
    // {
    //     fullName: "Mia Lewis",
    //     profilePic: "https://randomuser.me/api/portraits/women/47.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
    // },
    // {
    //     fullName: "Henry Walker",
    //     profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    // },
    // {
    //     fullName: "Charlotte Hall",
    //     profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    // },
    // {
    //     fullName: "Daniel Young",
    //     profilePic: "https://randomuser.me/api/portraits/men/63.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    // },
    // {
    //     fullName: "Amelia King",
    //     profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    // },
    // {
    //     fullName: "Matthew Scott",
    //     profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
    // },
    // {
    //     fullName: "Harper Green",
    //     profilePic: "https://randomuser.me/api/portraits/women/81.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    // },
    // {
    //     fullName: "Ethan Baker",
    //     profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    // },
    // {
    //     fullName: "Ella Adams",
    //     profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    // },
    // {
    //     fullName: "Alexander Nelson",
    //     profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
    //     storyFile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    // }
];

const createStoryHTMLThroughMap = () => {
    const returnedArr = stories.map((story) => {
        return `
                <div class="story">
                    <img src="${story.storyFile}" alt="">
                    <div class="profile-pic">
                        <img src="${story.profilePic}" alt="">
                    </div>
                    <div class="profile-name">
                        <p>${story.fullName}</p>
                    </div>
                </div>        `
    });

    storyContainer.innerHTML = returnedArr.join("");
};
createStoryHTMLThroughMap();